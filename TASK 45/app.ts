function createCar(
    manufacturer: string,
    model: string,
    ...properties: [string, any][]
  ): any {
    const car: any = {
      manufacturer,
      model,
    };
    for (const [key, value] of properties) {
      car[key] = value;
    }
    return car;
  }
  
  
  const myCar: string = createCar(
    "Toyota",
    "corolla",
    ["color", "red"],
    ["optional_feature", "sunroof"],
    ["speed", "280km/hour"]
  );
  
  console.log(myCar);