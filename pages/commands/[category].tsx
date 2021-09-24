import CategorySideBar from "promotional/Commands/SideBar/CategorySidebar";
import Module from "promotional/Commands/Module";
import Header from "promotional/Header/Header";
import React, { useEffect } from "react";
import PageTitle from "promotional/Layout/PageTitle";
import make_request from "@/lib/make_request";
import Title from "@/modules/Meta/Title";

const Category = (props: { category: string; categorys: string[] }) => {
  return (
    <div>
      <Title title={`${props.category} Commands`} />
      <Header />
      <PageTitle title="Commands" desc="List of bot commands" />
      <CategorySideBar categorys={props.categorys} category={props.category}>
        <Module category={props.category} />
      </CategorySideBar>
    </div>
  );
};

export const getServerSideProps = async (ctx: { query: { category: any } }) => {
  const { category } = ctx.query;
  const res = await make_request(process.env.APP_URI + "/commands.json");
  const categorys = res
    .map((value: { category: any }) => value.category)
    .filter(
      (value: any, index: any, _arr: string | any[]) =>
        _arr.indexOf(value) == index
    );

  return { props: { category, categorys } };
};

export default Category;
