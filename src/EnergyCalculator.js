function EnergyCalculator (listOfColours) {
    let energyTotal;

    const convertToRGB = (hex) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        
        return { r, g, b };
    }

    const calculateEnergy = (r, g, b) => {
        if(r === 255 && g === 255 && b=== 255) {
            return 100;
        }
        if(r === 0 && g === 0 && b=== 0) {
            return 6;
        }
        return (Math.round((r*3.5) + (g*4) + (b*8) / 100));
    }

    listOfColours.forEach(colour => {
        energyTotal = energyTotal + calculateEnergy(convertToRGB(colour));
    }); 

    return energyTotal/200;
}

export default EnergyCalculator;