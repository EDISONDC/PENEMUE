 const text = " Dear Mr. Eddie,
 I understand that sometimes you feel empty, as if your mind is a void of pure darkness. I also know that sometimes it's hard for you to think, and all you can do is daydream. It's frustrating not to feel like yourself, without dreams, goals, or happiness. But remember, even in the darkest times, there is a flicker of light. You have the strength within you to overcome this. The days seem to pass by quickly, like a speeding bullet train. Hours feel like seconds, and you constantly feel like you're running late, like you're off track. But you are not alone in this journey. You have the power to find your way back, to reclaim your dreams and your happiness. You have once told me that you're asking yourself these questions like: Who are you, and what is your real purpose? How can you find peace within yourself? Why do you always rely on others? Why is your self-confidence so low? Why do you keep sabotaging yourself? Why do you hold onto this pride? These questions may seem heartbreaking, but they are also the keys to your transformation. Embrace them, and you will find the answers you seek. You used to think you could do anything and beat everyone. You used to believe you were the best and didn't need help. But now, you feel jealous, angry, disappointed, and regressed. You can't seem to move forward because the past still haunts you. It's okay to feel lost sometimes. It's okay to stumble and fall. What matters is that you pick yourself up, dust yourself off, and keep moving forward. How do you stop feeling this way? Can you stop feeling this way? What is this feeling, and why do you have to experience it? You feel like you're different. You are unique, and that's what makes you special. Embrace your uniqueness, and use it to fuel your journey forward. I know life is tough for you, but please remember, this is not the end. You have yourself, and you must stand on your own feet. Trust yourself, my dear friend. This is just the beginning of your journey. Always remember that we're just here for you.
                                                                                                              Sincerely,                                                                                                                   Edison";

    const paragraph = text.split("");

    let i = 0;

    function dashOut(arr) {
      if (i < arr.length) {
        console.log(arr[i]);
        document.querySelector(".textCont").textContent += arr[i];

        i++;
        console.log("The i count: " + i);
        if (i < arr.length) {
          setTimeout(function () {
            dashOut(arr);
          }, interval(arr[i]));
        }
      }
    }

    function interval(letter) {
      console.log(letter);
      if (letter === ";" || letter === "." || letter === ",") {
        return Math.floor(Math.random() * 500 + 500);
      } else {
        return Math.floor(Math.random() * 130 + 5);
      }
    }

    function startFromBegin() {
      i = 0;
      dashOut(paragraph);
    }

    startFromBegin();