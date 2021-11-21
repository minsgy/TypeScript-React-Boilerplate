/*
2. 인터페이스
*/

interface Company {
  name: string;
  age: number;
  address?: string; // Optional
}

const minseoksCompnay: Company = {
  name: "minseok",
  age: 18,
  address: "seoul",
};

const person: {
  // 익명 인터페이스
  name: string;
  age?: number;
} = {
  name: "minseok",
  age: 18,
};

/**
 * 3. tuple
 */

const tuple: [string, number] = ["minseok", 19];

/**
 * enum
 * 열거형 사용
 */

enum Color {
  RED = "red",
  GREEN = "green",
  BLUE = "blue",
}

const color = Color.BLUE;

/**
 * 대수 타입
 * 여러 자료형의 값을 가질 수 있게 함.
 * 합집합 타입과 교집합 타입
 */

let numOrStr: number | string = 1;
numOrStr = "str";

// 원시 타입에서 사용 불가함.
// let numAndStr: number & string = "";

interface Name {
  name: string;
}

interface Age {
  age: number;
}

let minseok: Name & Age = {
  name: "minseok",
  age: 100,
};

/**
 * Type을 활용해서 대수 활용 가능합니다.
 */

type Person = Name & Age;
let julia: Person = {
  name: "julia",
  age: 18,
};

/**
 * 옵셔널(Optional)
 * 값이 존재하지 않는 경우 사용하는 타입
 */

interface Post {
  title: string;
  content: string;
}

interface ResData {
  post?: Post;
  message?: string;
  status: number;
}

const response: ResData[] = [
  {
    post: {
      title: "Hello",
      content: "Hello World",
    },
    status: 200,
  },
  {
    message: "Error",
    status: 500,
  },
];

/**
 * Generic
 * 하나의 인터페이스로 여러 타입을 이용하는 경우
 */

interface Value<T> {
  value: T;
}

const value: Value<number> = {
  value: 1,
};

function toString<T>(a: T): string {
  return `${a}`;
}

toString("5"); // 5 <string> 생략가능

/**
 * Partial, Required, Pick, Omit
 * 기존 interface 재활용
 */

interface User {
  id: number;
  name: string;
  age: number;
  address: string;
  createdAt?: string;
  updateAt?: string;
}

// Partial
// 모든 필드가 Optional
const partial: Partial<User> = {};

// Required
// 모든 필드가 Required
const required: Required<User> = {
  id: 1,
  name: "minseok",
  age: 18,
  address: "seoul",
  createdAt: "2020-01-01",
  updateAt: "2020-01-01",
};

// Pick
// 특정 필드만 골라서 사용

const pick: Pick<User, "name" | "age" | "address"> = {
  name: "",
  age: 18,
  address: "",
};

// Omit
// 특정 필드만 제외하고 사용
const omit: Omit<User, "name" | "age" | "address"> = {
  id: 1,
  createdAt: "2020-01-01",
  updateAt: "2020-01-01",
};

const mixed: Omit<User, "id" | "address" | "age" | "createAt" | "updateAt"> &
  Pick<Partial<User>, "address" | "age"> = {
  name: "",
};

/**
 * extends
 * 특정 인터페이스를 상속 받아 인터페이스 확장
 */

interface Time {
  hour: number;
  minute: number;
  second: number;
}

interface DateTime extends Time {
  year: number;
  month: number;
  day: number;
}

interface OffsetDateTime extends DateTime {
  offset: number;
}

interface ZonedDateTime extends DateTime {
  zoneId: string;
}

interface TimeFormat extends Pick<Time, "hour" | "minute"> {
  ampm: "am" | "pm";
}

const timeFormat: TimeFormat = {
  hour: 10,
  minute: 30,
  ampm: "am",
};

// 위 내용을 참고해서 그동안 만든 컴포넌트와 커스텀 훅을 typescript로 다시 작성하기.
