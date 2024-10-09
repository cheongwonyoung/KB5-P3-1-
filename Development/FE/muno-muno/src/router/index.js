import { createRouter, createWebHistory } from "vue-router";
import HomeP from "@/pages/Home.vue";
import ProductP from "@/pages/Product.vue";
import PropertyP from "@/pages/Property.vue";
import CommunityP from "@/pages/Community.vue";
import LoginP from "@/pages/LoginPage.vue";
import SignupP from "@/pages/SignUpPage.vue";
import MyPage from "@/pages/MyPage.vue";
import MyPageEdit from "@/pages/MyPageEdit.vue";
import Search from "@/pages/Search.vue";
import Message from "@/pages/Message.vue";
import Modal from "@/components/Modal.vue";
import FindPasswordP from "@/pages/FindPassword.vue";
import { createRouter, createWebHistory } from 'vue-router';
import HomeP from '@/pages/Home.vue';
import ProductP from '@/pages/Product.vue';
import PropertyP from '@/pages/Property.vue';
import LoginP from '@/pages/LoginPage.vue';
import SignupP from '@/pages/SignUpPage.vue';
import MyPage from '@/pages/MyPage.vue';
import MyPageEdit from '@/pages/MyPageEdit.vue';
import Search from '@/pages/Search.vue';
import Modal from '@/components/Modal.vue';
// import apiClient from '@/axios';
import apiClient from '@/axios';
import CommunityP from '@/pages/CommunityPage.vue';
import PostDetailP from "@/pages/PostDetailPage.vue";
import WritePostP from "@/pages/WritePostPage.vue"
import EditPostP from "@/pages/EditPostPage.vue";
import NotificationP from "@/pages/NotificationPage.vue";

const routes = [
    { path: "/", name: "Home", component: HomeP },
    { path: "/product", name: "Product", component: ProductP },
    { path: "/property", name: "Property", component: PropertyP },
    { path: "/community", name: "Community", component: CommunityP },
    { path: "/login", name: "Login", component: LoginP },
    { path: "/findPassword", name: "FindPassword", component: FindPasswordP },
    { path: "/signup", name: "SignUp", component: SignupP },
    { path: "/mypage", name: "MyPage", component: MyPage },
    { path: "/mypageedit", name: "MyPageEdit", component: MyPageEdit },
    { path: "/search", name: "Search", component: Search },
    { path: "/message", name: "Message", component: Message },
    { path: "/modal", name: "Modal", component: Modal },
  { path: '/', name: 'Home', component: HomeP },
  { path: '/product', name: 'Product', component: ProductP },
  { path: '/property', name: 'Property', component: PropertyP },
  { path: '/community', name: 'Community', component: CommunityP },
  { path: '/login', name: 'Login', component: LoginP },
  { path: '/signup', name: 'SignUp', component: SignupP },
    { path: '/mypage', name: 'MyPage', component: MyPage },
    { path: '/mypageedit', name: 'MyPageEdit', component: MyPageEdit },
    { path: '/search', name: 'Search', component: Search },
    { path: '/modal', name: 'Modal', component: Modal },
  { path: '/community/:id', name: 'PostDetail', component: PostDetailP, props:true },
  { path: '/community/create', name: 'WritePost', component: WritePostP, props:true },
  { path: '/community/modify/:id', name: 'EditPost', component: EditPostP, props:true },
    { path: '/community/notification', name: 'Notification', component: NotificationP, props:true }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// const navigationRoutes = ['Login', 'SignUp'];

// router.beforeEach((to, from, next) => {
//     const token = localStorage.getItem("JwtToken"); // 토큰을 localStorage에서 가져옴

//     if (!navigationRoutes.includes(to.name)) {
//         if (!token) {
//             next({ name: "Login" });
//             return;
//         }
//         apiClient
//             .get("/auth/authenticate")
//             .then((res) => {
//                 if (res.status == 200) next();
//                 else {
//                     next({ name: "Login" });
//                 }
//             })
//             .catch((err) => {
//                 if (err.status == 401) alert("로그인이 만료되었습니다. 다시 로그인 해주세요.");
//                 console.log(err);
//                 next({ name: "Login" });
//             });
//     } else {
//         next();
//     }
// });

export default router;
