
function checkVotingEligibility(age, nationality) {
    const minVotingAge = 18;
    if (age >= minVotingAge && nationality === "citizen") {
        return "You are eligible to vote!";
    } else {
        return "You are not eligible to vote.";
    }
}
const personAge = 20;
const personNationality = "citizen";

console.log(checkVotingEligibility(personAge, personNationality));
