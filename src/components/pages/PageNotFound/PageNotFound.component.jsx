import "./PageNotFound.css"
export default function PageNotFound(){

    return(
        <div className="Container-fluid">
            <div className="col-12 text-center">
				<img src="https://i.pinimg.com/originals/0e/c0/db/0ec0dbf1e9a008acb9955d3246970e15.gif" className="h-200px h-md-400px mb-4"/>
				<h1 className="display-1 text-danger mb-0">404</h1>
				<h2>Oh no, something went wrong!</h2>
				<p className="mb-4">Either something went wrong or this page doesn't exist anymore.</p>
			</div>
        </div>
    )
}