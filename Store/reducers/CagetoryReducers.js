import React from 'react'
import Cagetory from '../../Models/Cagetory'
import { INSERT_CATEGORY, DELETE_CATEGORY, UPDATE_CATEGORY } from '../actions/CagtoryAction'

const initialState = {
    categories: [
        new Cagetory(1, 'Công Nghệ', 'Gucci original', 'Shield your head and scalp from the sun. Keep your eyes protected and clear in the rain. Provides you with a shield from wind and dust – versatility is what is needed from good quality headwear.' ), 
        new Cagetory(2, "Thời Trang", "Nike air force 1", 'In addition to the effect of softening the feet while people walk, run and jump, shoes are also used as a decoration, and further, protect the overall health of people.'),
        new Cagetory(3, 'Tình yêu', 'The bomber jacket| Uniform', 'Uniform is backed by a 365-day guarantee. We’re so confident in the collection that in the unlikely event that a tee gets a hole, a sweatshirt collar shrinks up, an oxford loses its color—don’t sweat it. We’ll gladly replace it with a new one.' ), 
        new Cagetory(4, "Con người", "JNX Sports Winter Hoodie", 'A JNX Sports Product Stay Warm On Those Cold Morning Runs! Poly/spandex blend Comes in 5 sizes Full zip performance hoodie Stand out from the crowd'),
        new Cagetory(5, 'Sở thích', 'Miramar Joggers', 'Co-founded in 2002 by British designers Marcus Wainwright and David Neville, New York-based label Rag & Bone distinguished itself by combining British style with directional, modern design. Each collection of Rag & Bone apparel is conceived in New York and developed using time-honored techniques and skilled manufacturers from around the world to create goods of the highest quality. ' ), 
    ],
        
    currentCategory: null,
}
export default (state = initialState, action) => {
    const {type, category} = action

    switch(type){
        case INSERT_CATEGORY:
            return {...state, categories: [...state.categories, category]}
        case DELETE_CATEGORY:
            const { categoryId } = action;

            console.log(categoryId)

            const filteredCategories = state.categories.filter(
                (item) => item.categoryId !== categoryId
                )
            console.log(filteredCategories)
            return {...state, categories: [...filteredCategories]}
        case UPDATE_CATEGORY:
            const filteredCates = state.categories.filter(
                (item) => item.categoryId !== category.categoryId
                )
            return {...state, categories: [...filteredCates, category]}
        default:
            return state;
    }
}
