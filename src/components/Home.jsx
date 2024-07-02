const Home = () => {
  return (
    <div>
      <div className="container mt-5">
          <div className="row">
            <div className="col-md-6 offset-md-3"></div>
            <div className="card">
                <div className="card-header">
                    Home
                </div>
                <div className="card-body">
                    <p>Welcome to the job Portal</p>
                    <p className="text-muted">This is the simple job portal application built with react and nodeJs.
                        It allows users to register, login and view job listings. 
                        The application also allows the users to apply for a job 
                        and keep track of the status and view the list of jobs applied</p>
                </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Home;