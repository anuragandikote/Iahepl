import React from 'react'

const GoogleReviews = () => {
    return (
        <div className="py-10 px-6 text-center mx-auto">
            <div className="flex justify-center items-center gap-2">
                {/* <!-- Google G icon --> */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="40" height="40">
                    <path fill="#fbc02d" d="M43.6 20.5H42V20H24v8h11.3C33.4 32.3 29.2 35 24 35c-6.1 0-11-4.9-11-11s4.9-11 11-11c2.8 0 5.3 1 7.3 2.7l5.7-5.7C33.4 7.2 28.9 5 24 5 13.5 5 5 13.5 5 24s8.5 19 19 19 19-8.5 19-19c0-1.2-.1-2.3-.4-3.5z" />
                    <path fill="#e53935" d="M6.3 14.7l6.6 4.8C14.3 16 18.8 13 24 13c2.8 0 5.3 1 7.3 2.7l5.7-5.7C33.4 7.2 28.9 5 24 5c-7.7 0-14.3 4.3-17.7 10.7z" />
                    <path fill="#4caf50" d="M24 43c5.2 0 10-2 13.5-5.2l-6.2-5.2C29.3 34.5 26.8 35 24 35c-5.2 0-9.6-2.7-12.3-6.7l-6.5 5C9.7 39.3 16.3 43 24 43z" />
                    <path fill="#1565c0" d="M43.6 20.5H42V20H24v8h11.3c-1.5 4.3-5.7 7-11.3 7-5.2 0-9.6-2.7-12.3-6.7l-6.5 5C9.7 39.3 16.3 43 24 43c10.5 0 19-8.5 19-19 0-1.2-.1-2.3-.4-3.5z" />
                </svg>
                <p className="text-2xl font-semibold font-oswald text-gray-800">4.8</p>
                <div className="flex items-center">
                    {/* <!-- Full stars --> */}
                    <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.567-.955L10 0l2.945 5.955 6.567.955-4.756 4.635 1.122 6.545z" />
                    </svg>
                    <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.567-.955L10 0l2.945 5.955 6.567.955-4.756 4.635 1.122 6.545z" />
                    </svg>
                    <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.567-.955L10 0l2.945 5.955 6.567.955-4.756 4.635 1.122 6.545z" />
                    </svg>
                    <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.567-.955L10 0l2.945 5.955 6.567.955-4.756 4.635 1.122 6.545z" />
                    </svg>
                    {/* <!-- Half star --> */}
                    <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.567-.955L10 0z" />
                    </svg>
                </div>
                <span className="ml-2 text-gray-600 font-semibold font-oswald text-xl">Google Reviews</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mt-6 text-gray-900 font-oswald">
                Impact Academy Success Stories
            </h2>
            <p className="text-2xl text-gray-700 mt-2 font-oswald">
                Real Learners, Real Growth
            </p>
        </div>
    )
}

export default GoogleReviews