import workSlide01 from "../../assets/images/work-slide-01.jpg";
import workSlide02 from "../../assets/images/work-slide-02.jpg";
import workSlide03 from "../../assets/images/work-slide-03.jpg";
import workSlide04 from "../../assets/images/work-slide-04.jpg";
import workSlide05 from "../../assets/images/work-slide-05.jpg";
import workSlide06 from "../../assets/images/work-slide-06.jpg";
import thumbnail01 from "../../assets/images/work-slide-01-small.jpg";
import thumbnail02 from "../../assets/images/work-slide-02-small.jpg";
import thumbnail03 from "../../assets/images/work-slide-03-small.jpg";
import thumbnail04 from "../../assets/images/work-slide-04-small.jpg";
import thumbnail05 from "../../assets/images/work-slide-05-small.jpg";
import thumbnail06 from "../../assets/images/work-slide-06-small.jpg";

const initialState = {
    postDetails: [
        {
            id: 3215243,
            postId: 51243213,
            title: 'Digital Marketing Service',
            shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            imageGallary: [ 
                {
                    original: workSlide01,
                    thumbnail: thumbnail01
                },
                {
                    original: workSlide02,
                    thumbnail: thumbnail02
                },
                {
                    original: workSlide03,
                    thumbnail: thumbnail03
                },
                {
                    original: workSlide04,
                    thumbnail: thumbnail04
                },
                {
                    original: workSlide05,
                    thumbnail: thumbnail05
                },
                {
                    original: workSlide06,
                    thumbnail: thumbnail06
                }
            ],
            comments: [
                {
                    id: 1654313213565,
                    author: 'John Doe',
                    created_at: '2021-11-10 16:40:00',
                    comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
                    replies: [
                        {
                            id: 16543132135565,
                            author: 'John Doe',
                            created_at: '2021-11-10 16:40:00',
                            comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
                            replies: [
                                {
                                    id: 1654315643213565,
                                    author: 'John Doe',
                                    created_at: '2021-11-10 16:40:00',
                                    comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
                                    replies: []
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 16543132642213565,
                    author: 'Smith',
                    created_at: '2021-11-10 15:40:00',
                    comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
                    replies: [
                        {
                            id: 1792654313213565,
                            author: 'John Doe',
                            created_at: '2021-11-10 16:40:00',
                            comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
                            replies: []
                        }
                    ]
                },
                {
                    id: 16543131356213565,
                    author: 'John Doe',
                    created_at: '2021-11-10 16:40:00',
                    comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
                    replies: [
                        {
                            id: 165431324215613565,
                            author: 'John Doe',
                            created_at: '2021-11-10 16:40:00',
                            comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
                            replies: []
                        }
                    ]
                },
            ],
            markUp: `<p style="color: #6c757d">You are permitted to download, modify and use Purple Buzz template for your websites. You are not permitted to re-distribute this template ZIP file on any other template websites. It is super easy to simply copy and repost the ZIP file on any <a href="https://www.google.com/search?q=free+css" target="_blank">Free CSS</a> template websites.</p><br/>
            <div style="padding:10px 25px; border-left: 5px solid #e0e0e0;"><q style="font-size: 30px"; ><i>bulum vestibulum est eu lorem laoreet suscipit. Duis auctor, metus vel sollicitudin hendrerit, elit neque pulvinar magna, non sodales orci turpis blandit quam.</i></q></div><br/>
            <p style="color: #6c757d">Nam tortor quam, aliquet vel nibh sit amet, faucibus bibendum nisl. Donec vehicula nulla justo, vel sodales massa vestibulum nec. Praesent non orci sed massa fringilla rutrum at et odio. Quisque est orci, elementum sed neque ac, suscipit consectetur leo. Cras fermentum luctus cursus. Ut porta, augue vel tempus congue, augue purus vulputate ex, lacinia lobortis arcu metus sed lectus.</p><br/>
            <iframe width="100%" height="482" src="https://www.youtube.com/embed/1z--ZRS5x5U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br/>
            <p style="color: #6c757d">Ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.</P>`
        },
        {
            id: 3215243,
            postId: 51243214,
            title: 'Corporate Branding Service',
            shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            imageGallary: [ 
                {
                    original: workSlide01,
                    thumbnail: thumbnail01
                },
                {
                    original: workSlide02,
                    thumbnail: thumbnail02
                },
                {
                    original: workSlide03,
                    thumbnail: thumbnail03
                },
                {
                    original: workSlide04,
                    thumbnail: thumbnail04
                },
                {
                    original: workSlide05,
                    thumbnail: thumbnail05
                },
                {
                    original: workSlide06,
                    thumbnail: thumbnail06
                }
            ],
            comments: [],
            markUp: `<p style="color: #6c757d">You are permitted to download, modify and use Purple Buzz template for your websites. You are not permitted to re-distribute this template ZIP file on any other template websites. It is super easy to simply copy and repost the ZIP file on any <a href="https://www.google.com/search?q=free+css" target="_blank">Free CSS</a> template websites.</p><br/>
            <div style="padding:10px 25px; border-left: 5px solid #e0e0e0;"><q style="font-size: 30px"; ><i>bulum vestibulum est eu lorem laoreet suscipit. Duis auctor, metus vel sollicitudin hendrerit, elit neque pulvinar magna, non sodales orci turpis blandit quam.</i></q></div><br/>
            <p style="color: #6c757d">Nam tortor quam, aliquet vel nibh sit amet, faucibus bibendum nisl. Donec vehicula nulla justo, vel sodales massa vestibulum nec. Praesent non orci sed massa fringilla rutrum at et odio. Quisque est orci, elementum sed neque ac, suscipit consectetur leo. Cras fermentum luctus cursus. Ut porta, augue vel tempus congue, augue purus vulputate ex, lacinia lobortis arcu metus sed lectus.</p><br/>
            <iframe width="100%" height="482" src="https://www.youtube.com/embed/1z--ZRS5x5U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br/>
            <p style="color: #6c757d">Ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.</P>`
        },
        {
            id: 3215243,
            postId: 51243215,
            title: 'Leading Digital Solution',
            shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            imageGallary: [ 
                {
                    original: workSlide01,
                    thumbnail: thumbnail01
                },
                {
                    original: workSlide02,
                    thumbnail: thumbnail02
                },
                {
                    original: workSlide03,
                    thumbnail: thumbnail03
                },
                {
                    original: workSlide04,
                    thumbnail: thumbnail04
                },
                {
                    original: workSlide05,
                    thumbnail: thumbnail05
                },
                {
                    original: workSlide06,
                    thumbnail: thumbnail06
                }
            ],
            comments: [],
            markUp: `<p style="color: #6c757d">You are permitted to download, modify and use Purple Buzz template for your websites. You are not permitted to re-distribute this template ZIP file on any other template websites. It is super easy to simply copy and repost the ZIP file on any <a href="https://www.google.com/search?q=free+css" target="_blank">Free CSS</a> template websites.</p><br/>
            <div style="padding:10px 25px; border-left: 5px solid #e0e0e0;"><q style="font-size: 30px"; ><i>bulum vestibulum est eu lorem laoreet suscipit. Duis auctor, metus vel sollicitudin hendrerit, elit neque pulvinar magna, non sodales orci turpis blandit quam.</i></q></div><br/>
            <p style="color: #6c757d">Nam tortor quam, aliquet vel nibh sit amet, faucibus bibendum nisl. Donec vehicula nulla justo, vel sodales massa vestibulum nec. Praesent non orci sed massa fringilla rutrum at et odio. Quisque est orci, elementum sed neque ac, suscipit consectetur leo. Cras fermentum luctus cursus. Ut porta, augue vel tempus congue, augue purus vulputate ex, lacinia lobortis arcu metus sed lectus.</p><br/>
            <iframe width="100%" height="482" src="https://www.youtube.com/embed/1z--ZRS5x5U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br/>
            <p style="color: #6c757d">Ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.</P>`
        },
        {
            id: 3215243,
            postId: 51243216,
            title: 'Smart Applications',
            shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            imageGallary: [ 
                {
                    original: workSlide01,
                    thumbnail: thumbnail01
                },
                {
                    original: workSlide02,
                    thumbnail: thumbnail02
                },
                {
                    original: workSlide03,
                    thumbnail: thumbnail03
                },
                {
                    original: workSlide04,
                    thumbnail: thumbnail04
                },
                {
                    original: workSlide05,
                    thumbnail: thumbnail05
                },
                {
                    original: workSlide06,
                    thumbnail: thumbnail06
                }
            ],
            comments: [],
            markUp: `<p style="color: #6c757d">You are permitted to download, modify and use Purple Buzz template for your websites. You are not permitted to re-distribute this template ZIP file on any other template websites. It is super easy to simply copy and repost the ZIP file on any <a href="https://www.google.com/search?q=free+css" target="_blank">Free CSS</a> template websites.</p><br/>
            <div style="padding:10px 25px; border-left: 5px solid #e0e0e0;"><q style="font-size: 30px"; ><i>bulum vestibulum est eu lorem laoreet suscipit. Duis auctor, metus vel sollicitudin hendrerit, elit neque pulvinar magna, non sodales orci turpis blandit quam.</i></q></div><br/>
            <p style="color: #6c757d">Nam tortor quam, aliquet vel nibh sit amet, faucibus bibendum nisl. Donec vehicula nulla justo, vel sodales massa vestibulum nec. Praesent non orci sed massa fringilla rutrum at et odio. Quisque est orci, elementum sed neque ac, suscipit consectetur leo. Cras fermentum luctus cursus. Ut porta, augue vel tempus congue, augue purus vulputate ex, lacinia lobortis arcu metus sed lectus.</p><br/>
            <iframe width="100%" height="482" src="https://www.youtube.com/embed/1z--ZRS5x5U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br/>
            <p style="color: #6c757d">Ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.</P>`
        },
        {
            id: 3215243,
            postId: 51243217,
            title: 'Corporate Stationary',
            shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            imageGallary: [ 
                {
                    original: workSlide01,
                    thumbnail: thumbnail01
                },
                {
                    original: workSlide02,
                    thumbnail: thumbnail02
                },
                {
                    original: workSlide03,
                    thumbnail: thumbnail03
                },
                {
                    original: workSlide04,
                    thumbnail: thumbnail04
                },
                {
                    original: workSlide05,
                    thumbnail: thumbnail05
                },
                {
                    original: workSlide06,
                    thumbnail: thumbnail06
                }
            ],
            comments: [],
            markUp: `<p style="color: #6c757d">You are permitted to download, modify and use Purple Buzz template for your websites. You are not permitted to re-distribute this template ZIP file on any other template websites. It is super easy to simply copy and repost the ZIP file on any <a href="https://www.google.com/search?q=free+css" target="_blank">Free CSS</a> template websites.</p><br/>
            <div style="padding:10px 25px; border-left: 5px solid #e0e0e0;"><q style="font-size: 30px"; ><i>bulum vestibulum est eu lorem laoreet suscipit. Duis auctor, metus vel sollicitudin hendrerit, elit neque pulvinar magna, non sodales orci turpis blandit quam.</i></q></div><br/>
            <p style="color: #6c757d">Nam tortor quam, aliquet vel nibh sit amet, faucibus bibendum nisl. Donec vehicula nulla justo, vel sodales massa vestibulum nec. Praesent non orci sed massa fringilla rutrum at et odio. Quisque est orci, elementum sed neque ac, suscipit consectetur leo. Cras fermentum luctus cursus. Ut porta, augue vel tempus congue, augue purus vulputate ex, lacinia lobortis arcu metus sed lectus.</p><br/>
            <iframe width="100%" height="482" src="https://www.youtube.com/embed/1z--ZRS5x5U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br/>
            <p style="color: #6c757d">Ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.</P>`
        },
        {
            id: 3215243,
            postId: 51243218,
            title: '8 Financial Tips',
            shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            imageGallary: [ 
                {
                    original: workSlide01,
                    thumbnail: thumbnail01
                },
                {
                    original: workSlide02,
                    thumbnail: thumbnail02
                },
                {
                    original: workSlide03,
                    thumbnail: thumbnail03
                },
                {
                    original: workSlide04,
                    thumbnail: thumbnail04
                },
                {
                    original: workSlide05,
                    thumbnail: thumbnail05
                },
                {
                    original: workSlide06,
                    thumbnail: thumbnail06
                }
            ],
            comments: [
                {
                    id: 1654313213565,
                    author: 'John Doe',
                    created_at: '2021-11-10 16:40:00',
                    comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
                    replies: [
                        {
                            id: 16543132135565,
                            author: 'John Doe',
                            created_at: '2021-11-10 16:40:00',
                            comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
                            replies: [
                                {
                                    id: 1654315643213565,
                                    author: 'John Doe',
                                    created_at: '2021-11-10 16:40:00',
                                    comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
                                    replies: []
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 16543132642213565,
                    author: 'Smith',
                    created_at: '2021-11-10 15:40:00',
                    comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
                    replies: [
                        {
                            id: 1792654313213565,
                            author: 'John Doe',
                            created_at: '2021-11-10 16:40:00',
                            comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
                            replies: []
                        }
                    ]
                },
                {
                    id: 16543131356213565,
                    author: 'John Doe',
                    created_at: '2021-11-10 16:40:00',
                    comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
                    replies: [
                        {
                            id: 165431324215613565,
                            author: 'John Doe',
                            created_at: '2021-11-10 16:40:00',
                            comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
                            replies: []
                        }
                    ]
                },
            ],
            markUp: `<p style="color: #6c757d">You are permitted to download, modify and use Purple Buzz template for your websites. You are not permitted to re-distribute this template ZIP file on any other template websites. It is super easy to simply copy and repost the ZIP file on any <a href="https://www.google.com/search?q=free+css" target="_blank">Free CSS</a> template websites.</p><br/>
            <div style="padding:10px 25px; border-left: 5px solid #e0e0e0;"><q style="font-size: 30px"; ><i>bulum vestibulum est eu lorem laoreet suscipit. Duis auctor, metus vel sollicitudin hendrerit, elit neque pulvinar magna, non sodales orci turpis blandit quam.</i></q></div><br/>
            <p style="color: #6c757d">Nam tortor quam, aliquet vel nibh sit amet, faucibus bibendum nisl. Donec vehicula nulla justo, vel sodales massa vestibulum nec. Praesent non orci sed massa fringilla rutrum at et odio. Quisque est orci, elementum sed neque ac, suscipit consectetur leo. Cras fermentum luctus cursus. Ut porta, augue vel tempus congue, augue purus vulputate ex, lacinia lobortis arcu metus sed lectus.</p><br/>
            <iframe width="100%" height="482" src="https://www.youtube.com/embed/1z--ZRS5x5U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br/>
            <p style="color: #6c757d">Ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.</P>`
        },
    ]
}

export default initialState;