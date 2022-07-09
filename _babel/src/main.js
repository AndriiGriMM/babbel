const data = [undefined, 2, 3, 4, 5, 'sd'];
const ecmaScript = (arg1 = "error", arg2, arg3, ...arr) => {
  data.length < 5 ? console.log("ERROR") : console.log(`${arg1}-${arg2}-${arg3}`);
  console.log({ ...arr });
}
ecmaScript(...data);