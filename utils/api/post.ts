import { AxiosInstance } from "axios";
import { CreatePostDto, SearchPostDto, TPost } from "./types";

export const PostApi = (instance: AxiosInstance) => ({
  async getAll() {
    const { data } = await instance.get<TPost[]>("/posts");
    return data;
  },
  async getOne(id: number) {
    const { data } = await instance.get<TPost>(`/posts/${id}`);
    return data;
  },
  async create(dto: CreatePostDto) {
    const { data } = await instance.post<CreatePostDto, { data: TPost }>(
      "/posts",
      dto
    );
    return data;
  },
  async update(id: number, dto: CreatePostDto) {
    const { data } = await instance.patch<CreatePostDto, { data: TPost }>(
      `/posts/${id}`,
      dto
    );
    return data;
  },
  async search(query: SearchPostDto) {
    const { data } = await instance.get<{ items: TPost[]; total: number }>(
      "/posts/search",
      { params: query }
    );
    return data;
  },
});
