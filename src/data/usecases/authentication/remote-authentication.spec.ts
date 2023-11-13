import { RemoteAuthentication } from "./remote-authentication";
import { HttpPostClient } from "@/data/protocols/http/http-post-client";

/* 
  Seguindo o principio do SOL(I)D, o I
  (Interface Segregation Principle), serão criadas
  pequenas interfaces, ou interfaces segregadas, que tenham apenas 
  uma responsabilidade.
*/

describe("RemoteAuthentication", () => {
  test("Should call HttpClient with correct URL", async () => {
    class HttpPostClientSpy implements HttpPostClient {
      url?: string;
      async post(url: string): Promise<void> {
        this.url = url;
        return Promise.resolve();
      }
    }
    const url = "any_url";
    const httpPostClient = new HttpPostClientSpy();
    // sut => system under teste => classe que está sendo testada
    const sut = new RemoteAuthentication(url, httpPostClient);
    await sut.auth();
    expect(httpPostClient.url).toBe(url);
  });
});
