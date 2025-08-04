import supabaseClient from "@/utils/supabase";

export async function getCompanies(token) {
  const supabase = await supabaseClient(token);

  const { data, error } = await supabase
    .from("companies")
    .select("*");
    
    if (error) {
      console.error("Error Fetching companies", error);
      return null;
  }
  return data
}


export async function updateApplications(token, {job_id}, status) {
  const supabase = await supabaseClient(token);

  const { data, error } = await supabase.from("applications")
    .update({ status })
    .eq("job_id", job_id)
    .select()

  if (error || data.length === 0) {
    console.error("Error Updating Applications", error);
    return null;
  }
  return data;
}