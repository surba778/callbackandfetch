    const fetchAdviceById = (id) => {
      fetch("https://api.adviceslip.com/advice/${id}")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          const advice = data.slip.advice;
          console.log("Advice (ID: ${id}): ${advice}");
        })
        .catch(error => {
          console.error("There was a problem with the fetch operation:", error);
        });
    };

    fetchAdviceById(1);
