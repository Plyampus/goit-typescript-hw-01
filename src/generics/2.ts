type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare(top: AllType, bottom: AllType): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
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
