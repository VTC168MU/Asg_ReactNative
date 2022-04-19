import Blog from "../../Models/Blog";
import Cagetory from "../../Models/Cagetory";

export const INSERT_CATEGORY = "INSERT_CATEGORY";
export const DELETE_CATEGORY = "DELETE_CATEGORY";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";

export const insertCategory = (categoryId, name) => {
    const category = new Cagetory(categoryId, name);
    
    return {type: INSERT_CATEGORY, category: category};
}
export const updateCategory = (categoryId, name) => {
    const category = new Cagetory(categoryId, name);
    
    return {type: UPDATE_CATEGORY, category: category};
}
export const deleteCategory = (categoryId) => {

    return {type: DELETE_CATEGORY, categoryId: categoryId};
}

export const INSERT_BLOG = "INSERT_BLOG";
export const DELETE_BLOG = "DELETE_BLOG";
export const UPDATE_BLOG = "UPDATE_BLOG";

export const insertBlog = (blogId, image, title, status) => {
    const blog = new Blog(blogId, image, title, status);
    
    return {type: INSERT_BLOG, blog: blog};
}
export const updateBlog = (blogId, image, title, status) => {
    const blog = new Blog(blogId, image, title, status);
    
    return {type: UPDATE_BLOG, blog: blog};
}
export const deleteBlog = (blogId) => {

    return {type: DELETE_BLOG, blogId: blogId};
}
