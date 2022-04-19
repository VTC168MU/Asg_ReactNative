import React, { useState, Component } from "react";
import { ScrollView, View, Image, Text } from "react-native";

export default function ScrollViewComponent() {
  const uriImage = [
    {
      uri: "https://kinhnghiemquy.com/upload/img/2020/01/14/blue_guppy_fish_1578969701433.jpg",
    },
    {
      uri: "https://cabaymau.net/wp-content/uploads/2017/06/Full-Red-1-1-1.jpg",
    },
    {
      uri: "https://i.pinimg.com/originals/65/60/7b/65607b716c448319ffe25fbddb4bb5a5.jpg",
    },
    {
      uri: "https://i.pinimg.com/originals/e3/11/a1/e311a14fab3267b887f08d1126bed2f2.jpg",
    },
    {
      uri: "https://tapchicacanh.com/wp-content/uploads/2019/11/guppy-red-dragon-big-dorsal-ca-7-mau-rong-do-big-dorsal.jpg",
    },
    {
      uri: "https://i.pinimg.com/550x/f3/57/e5/f357e51e10efd57e18fa67506b9cc504.jpg",
    },
    {
      uri: "http://ahisu.com/wp-content/uploads/2020/08/hinh-anh-ca-bay-mau-dep-cho-nguoi-moi-choi-thuy-sinh.jpg",
    },
    {
      uri: "https://i.ytimg.com/vi/Cm3_j8dGnG8/maxresdefault.jpg",
    },
    {
      uri: "https://thucanchoca.com/Upload/CKEditor/637377687981916489_blueguppy.jpg",
    },
    {
      uri: "https://thucanchoca.com/Upload/blogs/637377695683860822_greenCobraGuppy.jpg",
    },
    {
      uri: "https://www.vaat.org.au/wp-content/uploads/gioi-thieu-ca-bay-mau-1.jpg",
    },
    {
      uri: "https://thuysinhonline.com/wp-content/uploads/2021/01/full-red-guppy-1.jpg",
    },
  ];
  return (
    <ScrollView horizontal = {true} >
      {uriImage.map((item) => (
        <Image
        source={{
            uri: item.uri,
          }}
          style={{
            height: 150,
            width: 150,
            alignSelf: "center",
            margin: 7,
            resizeMode: "contain",
            borderRadius: 7
          }}
        ></Image>
      ))}
    </ScrollView>
  );
}
