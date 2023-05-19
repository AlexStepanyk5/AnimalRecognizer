import react from 'react';

import './style.scss';


const Blog = () => {

    return (
        <div className='blog-container'>
            <div className='blog-content'>
                <div className='blog-text-box'>
                    <h1 className='slackey'>Our Blog</h1>
                    <p className='main-text'>We know that sometimes it`s hard to know each little detail about pet-care,so we have created whole knowledge base to help you with those small things. It also has a lot of different guides and tips for pet owners, interesting facts and will also  include different events and charity fundraising.</p>
                    <a href="/blog" className='blog-button'>Learn More</a>
                </div>
                <div className='blog-right-box'>
                    <img src='./images/Home/blog-dog.png' />
                    <div>
                        <h3 id='right-box-title'>3 interesting facts about dogs:</h3>
                        <p className='main-text'>1. Dogs` sense of smell is at least 40x better than ours<br />2. Dogs have 18 muscles controlling their ears<br />3. Your dog could be left or right-pawed</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Blog;