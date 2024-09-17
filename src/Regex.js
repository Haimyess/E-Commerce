/** @format */

export const validEmail = new RegExp(
  "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
);
export const validFirstName = new RegExp("/^[a-z ,.'-]+$/i");
export const validLastName = new RegExp("([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+");
export const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");
