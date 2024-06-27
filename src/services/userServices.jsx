import { post, postFile } from "../app/apiManager";

const signUpBrand = async (data) => {
  //  const formData = {
  //       full_name: data?.full_name,
  //       address:data?.address,
  //       mobile_number:data?.mobile_number,
  //       nic:data?.nic,
  //       file_path_nic:data?.file_path_nic,
  //       email:data?.email,
  //       country:data?.country?.label,
  //       company_name:data?.company_name,
  //       company_reg_no:data?.company_reg_no,
  //       file_path_br:data?.file_path_br,
  //       user_type:"super_user",
  //  }
  // const formData = new FormData();
  // formData.append("full_name", data?.full_name);
  // formData.append("address", data?.address);
  // formData.append("mobile_number", data?.mobile_number);
  // formData.append("nic", data?.nic);
  // formData.append("file_path_nic", data?.file_path_nic);
  // formData.append("email", data?.email);
  // formData.append("country", data?.country);
  // formData.append("company_name", data?.company_name);
  // formData.append("company_reg_no", data?.company_reg_no);
  // formData.append("file_path_br", data?.file_path_br);
  // formData.append("user_type", "super_user");
  const response = await postFile({
    path: "/company/register",
    file: data,
  });
  return response;
};

const signUpMerchant = async (data) => {
//   console.log("data", data);
//   const formData = new FormData();
//   formData.append("full_name", data?.full_name);
//   formData.append("address", data?.address);
//   formData.append("mobile_number", data?.mobile_number);
//   formData.append("nic", data?.nic);
//   formData.append("file_path_nic", data?.file_path_nic);
//   formData.append("email", data?.email);
//   formData.append("country", data?.country?.label);
//   formData.append("company_name", data?.company_name);
//   formData.append("company_reg_no", data?.company_reg_no);
//   formData.append("file_path_br", data?.file_path_br);
//   formData.append("user_type", "merchant");
  const response = await postFile({
    path: "/merchant/register",
    file: data,
  });
  return response;
};

export { signUpBrand, signUpMerchant };
