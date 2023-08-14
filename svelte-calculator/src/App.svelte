<script>
	let expression = "";
	let result = "";
  
	const handleInput = (input) => {
	  expression += input;
	};
  
	const clearExpression = () => {
	  expression = "";
	  result = "";
	};
  
	const calculate = async () => {
	  try {
		const response = await fetch("http://localhost:5000/calculate", {
		  method: "POST",
		  headers: {
			"Content-Type": "application/json",
		  },
		  body: JSON.stringify({ expression }),
		});
		const data = await response.json();
		result = data.result;
	  } catch (error) {
		console.error("Error calculating:", error);
	  }
	};
  </script>

<main>
  <h1>Svelte Calculator</h1>
  <div class="calculator">
    <input type="text" bind:value={expression} readonly="true" />
    <div class="keypad">
      <button on:click={() => handleInput("1")}>1</button>
      <button on:click={() => handleInput("2")}>2</button>
      <button on:click={() => handleInput("3")}>3</button>
      <button on:click={() => handleInput("+")}>+</button>
      <button on:click={() => handleInput("4")}>4</button>
      <button on:click={() => handleInput("5")}>5</button>
      <button on:click={() => handleInput("6")}>6</button>
      <button on:click={() => handleInput("-")}>-</button>
      <button on:click={() => handleInput("7")}>7</button>
      <button on:click={() => handleInput("8")}>8</button>
      <button on:click={() => handleInput("9")}>9</button>
      <button on:click={() => handleInput("*")}>&times;</button>
      <button on:click={() => handleInput("0")}>0</button>
      <button on:click={() => clearExpression()}>C</button>
      <button on:click={() => calculate()}>=</button>
      <button on:click={() => handleInput("/")}>&divide;</button>
    </div>
	<div class="result">
		<p>Result: {result.toString()}</p>
	  </div>
  </div>
</main>

<style>
	main {
	  font-family: Arial, sans-serif;
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  justify-content: center;
	  height: 100vh;
	}
  
	.calculator {
	  border: 2px solid #ccc;
	  border-radius: 8px;
	  padding: 20px;
	  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	}
  
	.keypad {
	  display: grid;
	  grid-template-columns: repeat(4, 1fr);
	  grid-gap: 10px;
	  margin-top: 10px;
	}
  
	.keypad button {
	  padding: 10px;
	  font-size: 18px;
	  background-color: #f0f0f0;
	  border: 1px solid #ddd;
	  border-radius: 5px;
	  cursor: pointer;
	  transition: background-color 0.2s ease;
	}
  
	.keypad button:hover {
	  background-color: #ddd;
	}
  
	.result {
	  margin-top: 20px;
	}
  </style>
  
