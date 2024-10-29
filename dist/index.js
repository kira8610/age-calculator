const ageForm = document.getElementById("ageForm");
const birthdateInput = document.getElementById("birthdateInput");
const announcement = document.getElementById("announcement");

ageForm.addEventListener("submit", event => {
    event.preventDefault();
    const birthdate = birthdateInput.value;
    age = getAge(birthdate);
    announcement.textContent = `Your age is: ${age.years} years, ${age.months} months, and ${age.days} days.`;
})

function getAge(birthdate) {
    const birthdateObj = new Date(birthdate);
    const today = new Date();
    
    let years = today.getFullYear() - birthdateObj.getFullYear();
    let months = today.getMonth() - birthdateObj.getMonth();
    let days = today.getDate() - birthdateObj.getDate();

    if (months < 0 || months === 0 && days < 0) {
        years--;
        months += 12;
    }

    if (days < 0) {
        months--;
        const lastMonth = (today.getMonth() - 1 + 12) % 12;
        const daysInLastMonth = new Date(today.getFullYear(), lastMonth + 1, 0).getDate();
        days += daysInLastMonth;
    }

    return { years, months, days };
}


