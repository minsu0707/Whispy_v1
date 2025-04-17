import {
  doc,
  setDoc,
  increment,
  getDoc,
  Timestamp,
  DocumentData,
} from "firebase/firestore";
import { logEvent } from "firebase/analytics";
import { db, analytics } from "../firebase";

// 방문자 데이터 인터페이스
interface VisitorData {
  count: number | DocumentData;
  lastVisit: Timestamp;
  uniqueVisitors?: number | DocumentData;
}

// 방문자 수 증가 및 추적 함수
export const trackVisitor = async (visitorId?: string) => {
  try {
    // 최근 방문 시간 체크하여 중복 방지
    const lastVisitKey = "lastVisitTimestamp";
    const currentTime = Date.now();
    const lastVisit = localStorage.getItem(lastVisitKey);

    // 5분(300000밀리초) 이내 재방문은 카운트하지 않음
    if (lastVisit && currentTime - parseInt(lastVisit) < 300000) {
      return;
    }

    const statsRef = doc(db, "stats", "visitors");
    const updateData: Partial<VisitorData> = {
      count: increment(1),
      lastVisit: Timestamp.now(),
    };

    // 고유 방문자 추적 (선택적)
    if (visitorId) {
      const visitorRef = doc(db, "visitors", visitorId);
      await setDoc(
        visitorRef,
        {
          firstVisit: Timestamp.now(),
          lastVisit: Timestamp.now(),
        },
        { merge: true }
      );

      // updateData에 uniqueVisitors 추가
      updateData.uniqueVisitors = increment(1);
    }

    // 방문자 통계 업데이트
    await setDoc(statsRef, updateData, { merge: true });

    // 분석 이벤트 기록
    logEvent(analytics, "page_view");

    // 최근 방문 시간 업데이트
    localStorage.setItem(lastVisitKey, currentTime.toString());
  } catch (error) {
    console.error("방문자 추적 오류:", error);
  }
};

// 방문자 통계 가져오기
export const getVisitorStats = async (): Promise<VisitorData | null> => {
  try {
    const statsRef = doc(db, "stats", "visitors");
    const statsDoc = await getDoc(statsRef);

    if (statsDoc.exists()) {
      return statsDoc.data() as VisitorData;
    }
    return null;
  } catch (error) {
    console.error("방문자 통계 가져오기 오류:", error);
    return null;
  }
};

// 고유 방문자 ID 생성 (예: 로컬 스토리지 기반)
export const generateVisitorId = (): string => {
  const existingId = localStorage.getItem("visitorId");
  if (existingId) return existingId;

  const newId = `visitor_${Date.now()}_${Math.random()
    .toString(36)
    .substr(2, 9)}`;
  localStorage.setItem("visitorId", newId);
  return newId;
};
