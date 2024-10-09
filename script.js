const adviceID = document.getElementById("advice_id");
const advice = document.getElementById("advice");
const btn = document.getElementById("dice_button");

async function getAdvice() {
  let data = await fetch("https://api.adviceslip.com/advice", {
    cache: "no-cache",
  });
  return data.json();
}

function showAdvice() {
  const data = getAdvice();
  data.then((result) => {
    adviceID.textContent = result.slip.id;
    advice.textContent = `“${result.slip.advice}”`;
  });
  data.catch((err) => console.log(`Failed to fetch advice: ${err}`));
}

btn.addEventListener("click", showAdvice);
