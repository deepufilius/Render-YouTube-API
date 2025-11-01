
export const generateName = ()=>{

    const names = [
    "Aarav", "Sophia", "Liam", "Isha", "Noah",
    "Maya", "Ethan", "Anaya", "Lucas", "Zara",
    "Arjun", "Chloe", "Ryan", "Meera", "Elijah",
    "Nina", "Jayden", "Kiara", "Daniel", "Riya",
    "Nathan", "Tara", "Isaac", "Saanvi", "Leo"
    ];

    const randomIndex = Math.floor(Math.random()*(names.length-1));

    return names[randomIndex];
}