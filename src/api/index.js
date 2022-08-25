import axios from "@/js/utils/axios";

export function getImportantInform() {
    axios.get("http://127.0.0.1:4523/m1/449483-0-default/pet/1", {});
}