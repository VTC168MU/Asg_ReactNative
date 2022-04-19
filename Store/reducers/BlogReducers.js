import React from 'react'
import Blog from '../../Models/Blog'
import { INSERT_BLOG, DELETE_BLOG, UPDATE_BLOG } from '../actions/CagtoryAction'

const initialState = {
    bloges: [
        new Blog(1, 'https://tapchicacanh.com/wp-content/uploads/2019/11/guppy-red-dragon-big-dorsal-ca-7-mau-rong-do-big-dorsal.jpg', "Sở thích", 'Bài viết này, tôi sẽ giới thiệu cho các bạn biết và phân biệt guppy nhé. Cá bảy màu còn có tên gọi tiếng Anh là Guppy hoặc Milions Fish. Cá bảy màu là một trong số các loại cá cảnh đẹp và phổ biến nhất thế giời hiện nay. Đây là dòng cá nước ngọt, có tuổi thọ cao. Cá bảy màu là một nhánh riêng của họ cá khổng tước. Cá guppy có chiều dài trung bình 3 -> 4 CM. Con cá bảy màu cái dài 2,5 đến 4 cm, con cá đực dài từ 2 đến 3 cm. Đây là dòng cá đẻ trứng thai. Tức là cá guppy cái ôm trứng trong người và đẻ thành con. Nói tóm lại, cá bảy màu là dòng cá đẻ con. Cá bảy màu có tuổi thọ từ 2 đến 3 năm. Hãy theo dõi những dòng miêu tả dưới đây nhằm mục đích giúp các bạn phận biệt cá bảy màu các loại.'), 
        new Blog(2, "https://img.lovepik.com//photo/50007/7678.jpg_860.jpg", "Công nghệ", "Nhờ có công nghệ, việc ứng tuyển của ứng viên cũng trở nên nhanh chóng và dễ dàng chỉ với một vài cú nhấp chuột. Điều này sẽ giúp các ứng viên tiết kiệm được nhiều thời gian, công sức và tiền bạc so với việc ứng tuyển truyền thống nộp hồ sơ ứng tuyển trực tiếp như trước đây. Ngoài việc giúp các ứng viên tiếp cận và tìm kiếm được việc làm phù hợp một cách nhanh chóng, sự phát triển của công nghệ cũng hỗ trợ nhà tuyển dụng rất nhiều trong việc tìm kiếm và thu hút nhân tài. Các trang tìm việc online với nguồn dữ liệu ứng viên dồi dào, đa ngành nghề, đa kỹ năng sẽ là gợi ý tuyệt vời để các doanh nghiệp dễ dàng tìm kiếm và chọn lọc được ứng viên phù hợp với vị trí tuyển dụng."),
        new Blog(3,"https://www.celeb.vn/wp-content/uploads/2021/04/kinh-doanh-thoi-trang-nam-1.jpg", 'Thời trang', 'Công nghệ thời đại 4.0 cũng góp phần tích cực trong việc tạo ra những ứng dụng mang lại nhiều tiện ích cho ngành công nghiệp thời trang. Những ứng dụng thời trang lần lượt ra đời cho phép người tiêu dùng mua sắm không giới hạn. Người dùng có thể lựa chọn và mua hàng trăm sản phẩm chỉ với một vài thao tác đơn giản. Ngoài ra, họ còn được hỗ trợ tận tình từ lúc bắt đầu mua hàng tới khi nhận được hàng.Điển hình có thể kể để các ứng dụng mua sắm như Shopee, Lazada hay Sapo ở Việt Nam. Những ứng dụng này cung cấp hàng ngàn sản phẩm từ hàng điện tử, hàng tiêu dùng, mỹ phẩm và tất tần tật những sản phẩm khác. Một trong những mặt hàng bán chạy nhất trên các ứng dụng này là sản phẩm thời trang.'), 
        new Blog(4,"https://img.freepik.com/free-vector/group-people-illustration-set_52683-33806.jpg?size=626&ext=jpg", "Con người", "Con người ta sinh ra vốn mang trong mình hỉ, nộ, ái, ố. Tuy nhiên, những cảm xúc vui vẻ, hồn nhiên nhiều lúc bị áp lực cuộc sống chôn vùi. Dần dần, con người trở nên khô khan về cảm xúc, thay vào đó là sự vô cảm. Con người dường như bị cuốn hút vào công việc, kiếm tiền… mà vô tình đánh mất nhiều thứ quý giá khác trong cuộc sống. Công nghệ đang ngày càng phát triển, chúng ta nay kết nối được khắp toàn cầu, khoảng cách địa lý không còn là vấn đề nữa. Ngồi một chỗ, chúng ta có thể trò chuyện với bạn bè khắp thế giới, kết nối mọi thông tin thông qua cái điện thoại bé xíu cầm trên tay. Nhiều quan hệ quá, nhiều thông tin quá nên chúng ta không còn thời gian cho đời sống thật nữa."),
        new Blog(5,"https://channel.mediacdn.vn/thumb_w/640/prupload/164/2017/08/img20170814172639254.jpg", 'Tình yêu', 'Tình yêu thật là đẹp, trái tim, tâm hồn của những người đang yêu chân thành thật trong sáng và cao cả. Người xưa yêu nhau bằng sự chân thành, người nay yêu nhau vì muôn vàn lý do. Tình yêu thật là đẹp, trái tim, tâm hồn của những người đang yêu chân thành thật trong sáng và cao cả. Người xưa yêu nhau bằng sự chân thành, người nay yêu nhau vì muôn vàn lý do. Khi chúng ta sống trong kỉ nguyên công nghệ thông tin, xã hội hiện đại, mọi thứ thay đổi. Do vậy, tình yêu cũng không thể tránh khỏi, những giá trị cơ bản bị thay đổi dần, mai một dần, bị “đồng hóa” bởi các luồng văn hóa hiện đại.', ), 
    ],
        
    currentCategory: null,
}
export default (state = initialState, action) => {
    const {type, blog} = action

    switch(type){
        case INSERT_BLOG:
            return {...state, bloges: [...state.bloges, blog]}
        case DELETE_BLOG:
            const { blogId } = action;

            console.log(blogId)

            const filteredBloges = state.bloges.filter(
                (item) => item.blogId !== blogId
                )
            console.log(filteredBloges)
            return {...state, bloges: [...filteredBloges]}
        case UPDATE_BLOG:
            const filteredBlogs = state.bloges.filter(
                (item) => item.blogId !== blog.blogId
                )
            return {...state, blog: [...filteredBlogs, blog]}
        default:
            return state;
    }
}
