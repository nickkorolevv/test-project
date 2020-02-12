export default function ({ route, redirect }) {
    if (route.fullPath === "/poll") {
        return redirect('/poll/params')
    }
}