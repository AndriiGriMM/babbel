const data = [undefined, 2, 3, 4, 5, 'sd'];
function EcmaScript(arg1 = "error", arg2, arg3, ...arr) {
  arguments.length < 5 ? console.log("ERROR") : console.log(`${arg1}-${arg2}-${arg3}`)
  console.log({ ...arr })
}
new EcmaScript(...data); 