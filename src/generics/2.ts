type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<T extends AllType, K extends keyof T>(
  top: Pick<T, K>,
  bottom: Pick<T, K>
): T {
  return {
    ...top,
    ...bottom,
  } as T;
}

const top: AllType = {
  name: "Top",
  position: 1,
  color: "Red",
  weight: 50,
};

const bottom: AllType = {
  name: "Bottom",
  position: 2,
  color: "Blue",
  weight: 100,
};

const result = compare(top, bottom);
console.log(result);
