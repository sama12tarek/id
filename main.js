document.getElementById('btn1').addEventListener('click', function() {
    const nationalID = document.getElementById('id').value;

    if (nationalID.length !== 14 || isNaN(nationalID)) {
        alert("Please enter a valid 14-digit national ID.");
        return;
    }

    // Extract birth year
    let birthYear = parseInt(nationalID.substring(1, 3), 10);
    const centuryMark = nationalID.charAt(0);

    if (centuryMark === '2') {
        birthYear += 1900;
    } else if (centuryMark === '3') {
        birthYear += 2000;
    }

    const birthMonth = parseInt(nationalID.substring(3, 5), 10);
    const birthDay = parseInt(nationalID.substring(5, 7), 10);

    const birthDate = new Date(birthYear, birthMonth - 1, birthDay);

    // Calculate age
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    // Gender determination (7th digit)
    const genderDigit = parseInt(nationalID.charAt(12));
    const gender = genderDigit % 2 === 0 ? "Female" : "Male";

    // Display results
    document.getElementById('res1').textContent = `Birth Date: ${birthDay}/${birthMonth}/${birthYear}`;
    document.getElementById('res2').textContent = `Age: ${age} years`;
    document.getElementById('res3').textContent = `Gender: ${gender}`;
    document.getElementById('res4').textContent = `Governorate Code: ${nationalID.substring(7, 9)}`;
    document.getElementById('res5').textContent = `Unique ID: ${nationalID.substring(9, 13)}`;
});
