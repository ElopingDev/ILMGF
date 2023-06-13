        const copypastaParts = [
            "LOVE MY #girlfriend ! <3",
            ":D ★☆ her <3 heR ! i Love !! HER <3",
            "heeeeeeeeeeeer!!!!!!",
            "she ♡",
            "#ILMGF(๑≧♡≦) #ILOVEHER",
            "#ILOVEMYGF ♡!! ILHSM"
        ];

        function getRandomPercentage() {
            return Math.floor(Math.random() * 80) + 10 + "%"; // Adjust the range to keep text within screen boundaries
        }

        const container = document.querySelector(".container");

        for (let i = 0; i < 25; i++) {
            const text = document.createElement("div");
            text.className = "text";
            text.innerText = copypastaParts[Math.floor(Math.random() * copypastaParts.length)];
            text.style.top = getRandomPercentage();
            text.style.left = getRandomPercentage();
            container.appendChild(text);
        }
