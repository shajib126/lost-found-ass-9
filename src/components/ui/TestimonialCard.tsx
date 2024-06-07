export type TTestimonial = {
    title:string
    name:string
}

const TestimonialCard =(testmonial:TTestimonial) => {
    console.log(testmonial);
    
  return (
    <div className="card md:w-96 bg-base-100 shadow-xl mb-4">
  <div className="card-body">
    <img className="w-[30%] mx-auto" src="https://img.freepik.com/premium-photo/bearded-man-illustration_665280-67047.jpg" alt="" />
    <p>{testmonial?.title}</p>
    <p className="">{testmonial?.name}</p>
  </div>
</div>
  )
}

export default TestimonialCard