import React from 'react';
import Api1 from './Api';

var cate_id;

function Child(props) {
 
        return (
            <>
                <div>
                    <div className='text'>
                        <div>
                            <h2 className='p1'>id : {props.post.id}</h2>
                            <h2 className='p2'>Name : {props.post.Name}</h2>
                        </div>
                        <div>
                            <div className='text-2'>
                                <h2 className='p3'>categories : {props.post.categories_id}</h2>
                            </div>
                            <h2 className='p4'>categories_name : {props.post.categories_name}</h2>
                        </div>
                    </div>
                    <div className='img'>
                        <div className='img-12'>
                            <div className='img11'><img src={props.post.images1}></img></div>
                            <div className='img1' ><img src={props.post.images1}></img></div>

                        </div>
                        <div className='img-12'>
                            <div className='img11'><img src={props.post.images2}></img></div>
                            <div className='img1'><img src={props.post.images2}></img></div>
                        </div>
                    </div>
                </div >
            </>
        );
    
}
export default Child; 