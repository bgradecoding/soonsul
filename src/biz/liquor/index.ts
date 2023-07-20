import { useQuery } from "react-query";
import { api } from "@/utils/api";
import { ScanRes } from "@/interfaces/detail";
import { DetailRes } from "@/interfaces/liquor";
import { liquorRouter } from "@/constants/routers";

const fetchScanLiquor = async (name: string) => {
  const { data } = await api.get<ScanRes>(
    liquorRouter.getScanResult + `?name=${encodeURI(name)}`
  );
  return data;
};

const fetchLiquorDetail = async (id: string) => {
  const { data } = await api.get<DetailRes>(
    liquorRouter.getLiquorDetail.replace("{liquorId}", id)
  );
  return data;
};

export const useGetScan = (name: string, callbackFn: (id: string) => void) => {
  return useQuery(["scan", name], () => fetchScanLiquor(name), {
    enabled: !!name,
    onSuccess: (result) => {
      callbackFn(result.data);
    },
  });
};

export const useGetLiquorDetail = (id: string) => {
  console.log(id);
  return useQuery(["liquorDetail", id], () => fetchLiquorDetail(id), {
    enabled: !!id,
  });
};
