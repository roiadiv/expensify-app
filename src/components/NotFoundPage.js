import React from 'react';//using jsx
import {Link} from 'react-router-dom';

//Link component instead of a tag not refresh the browser! -- client side routing
const NotFoundPage = ()=>(
    <div>
        404 - <Link to ="/">Go Home</Link> 
    </div>
);

export default NotFoundPage;