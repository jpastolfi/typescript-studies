import courses from "./courses";
import studyGroups from "./studyGroups";

type Course = {
  id: number;
  studyGroupId: number;
  title: string;
  keywords: string[];
  eventType: string;
};

type StudyGroup = {
  id: number;
  courseId: number;
  title: string;
  keywords: string[];
  eventType: string;
};

type SearchEventOptions = {
  query: string | number;
  eventType: "courses" | "groups";
};

const searchEvents = (options: SearchEventOptions) => {
  const events: (Course | StudyGroup)[] = options.eventType === 'courses' ? courses : studyGroups;
  return events.filter((event: Course | StudyGroup) => {
    if (typeof options.query === 'number') {
      if (event.id === options.query) return true
    }
    if (typeof options.query === 'string') {
      if (event.keywords.includes(options.query)) return true
    }
  })
};

const searchResults = searchEvents({query: 'art', eventType: 'courses'})
console.log(searchResults)

let enrolledEvents: (Course | StudyGroup)[] = [];
const enroll = (events: (Course | StudyGroup)[]) => {
  events.forEach((event) => enrolledEvents.push(event));
}

enroll(searchResults)
console.log(enrolledEvents)