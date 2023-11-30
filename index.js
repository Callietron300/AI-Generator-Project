function generateEvent(event) {
  event.preventDefault();
  let apiKey = "faf1t205ab1o74d732b54981fbc56c80";
  const searchInput = document.querySelector("#search-text-input");
  let prompt = searchInput.value;
  let context =
    "give me a short event description that is three sentances long with one emoji.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  const responseText = document.getElementById("responseText");

  const responseContainer = document.getElementById("responseContainer");
  responseContainer.classList.add("response");

  new Typewriter(responseText, {
    strings: "Generating your event description",
    autoStart: true,
    delay: 5,
  });

  axios.get(apiUrl).then(function (response) {
    new Typewriter(responseText, {
      strings: response.data.answer,
      autoStart: true,
      delay: 5,
    });
  });
}

let form = document.querySelector("form");
form.addEventListener("submit", generateEvent);

// event > get input data > AI call
