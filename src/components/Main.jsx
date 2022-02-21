import '../Styles/Main.css';

export default function Main(){
    return(
        <>
        <div className='identity'>
            <div className="jumbotron">
                <h1 className="display-4">Md. Shafiqul Islam</h1>
                <hr className="identityNameAfter"/>
                <p className="lead">Fullstack Web Developer | Reactjs Expert</p>
            </div>
        </div>
        <div className='objective'>
            <h2>Objective</h2>
            <hr/>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia doloribus corporis culpa ratione alias eius sunt quasi ut itaque aperiam in, autem minima, consectetur nemo tempora voluptate explicabo dolore dolorum.
            </p>
        </div>
        <div className='objective'>
            <h2>Experience</h2>
            <h3>Escape Bangladesh Limited <span>(October 2019 - Present)</span></h3>
            <hr/>
            <p className='respnsibilities'>Responsibilities:</p>
            <ol>
                <li>Frontend Development</li>
                <li>Backend development</li>
                <li>Existing Website customization</li>
                <li>Bug fixxing</li>
                <li>Client Management</li>
                <li>Uphold other IT related responsibilities</li>
            </ol>
            <h3>Headway Engineers International <span>(October 2018 - June 2019)</span></h3>
            <hr/>
            <p className='respnsibilities'>Responsibilities:</p>
            <ol>
                <li>Frontend Development</li>
                <li>Backend development</li>
                <li>Existing Website customization</li>
                <li>Bug fixxing</li>
                <li>Client Management</li>
                <li>Uphold other IT related responsibilities</li>
            </ol>
        </div>
        <div className='education'>
            <h2>Education</h2>
            <hr/>
            <h3>Computer Science & Engineering <span>(2014 - 2018)</span></h3>
            <p>Southeast University</p>
            <h3>Higher Secondary School Certificate <span>(2012 - 2013))</span></h3>
            <p>Shaheed Ramiz Uddin Cant. College, Cantonment Dhaka</p>
        </div>
        </>
    );
}