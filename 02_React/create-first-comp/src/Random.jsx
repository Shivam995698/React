function RandomNumber()
{
  let number = Math.round(Math.random()*100);
  return <h1 style={{'backgroundColor':'#2342'}}>
    <h1>The random Number is {number}</h1>
  </h1>
}
export default RandomNumber;