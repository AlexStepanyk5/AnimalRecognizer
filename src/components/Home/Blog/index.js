import './style.scss';


const Blog = () => {

    return (
        <div className='blog-container'>
            <div className='blog-content'>
                <div className='blog-text-box'>
                    <h1 className='slackey'>Наш блог</h1>
                    <p className='main-text'>Ми знаємо, що іноді важко знати кожну дрібницю про догляд за домашніми тваринами, тому ми створили цілу базу знань, щоб допомогти вам у цих дрібницях. Тут також багато різноманітних посібників та порад для власників домашніх тварин, цікавих фактів, а також буде інформація про різноманітні заходи та благодійні збори коштів.</p>
                    <a href="/blog" className='blog-button'>Побачити більше</a>
                </div>
                <div className='blog-right-box'>
                    <img src='./images/Home/blog-dog.png' alt='dogee'/>
                    <div>
                        <h3 id='right-box-title'>Три цікавих факти про собак:</h3>
                        <p className='main-text'>1. Нюх собак принаймні в 40 разів кращий, ніж наш<br />2. У собаки є 18 м'язів, які контролюють їхні вуха<br />3. Ваша собака може бути правшою та шульгою</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Blog;