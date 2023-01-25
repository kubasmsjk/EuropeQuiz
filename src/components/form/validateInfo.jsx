export default function validateInfo(values) {
  let errors = {};

  if (!values.nickname.trim()) {
    errors.nickname = "Nickname required";
  }
  if (!/\b([1-9]|10)\b/.test(values.amountOfQuestions)) {
    errors.amountOfQuestions = "Amount of Questions is invalid , try 1-10";
  }
  return errors;
}
