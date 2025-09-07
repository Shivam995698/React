function ErrorMessage(props)
{
  let item = props.it4;
  return (
    <>
    {item.length==0 ? <h3>i am still hungary</h3>:null};
    </>

  )
}
export default ErrorMessage;