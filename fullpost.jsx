import { AnchorProvider, Program } from "@project-serum/anchor";
import {
  useAnchorWallet,
  useConnection,
} from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostById } from "src/context/functions/getPostById";
import idl from "src/idl.json";

const PROGRAM_KEY = new PublicKey(idl.metadata.address);

function getProgram(provider) {
  return new Program(idl, PROGRAM_KEY, provider);
}

export const FullPost = () => {
  const { id } = useParams();
  const wallet = useAnchorWallet();
  const { connection } = useConnection();
  const [provider, setProvider] = useState();
  const [post, setPost] = useState();

  useEffect(() => {
    try {
      if (provider) {
        const getPost = async () => {
          const program = getProgram(provider);
          const post = await getPostById(id.toString(), program);
          setPost(post);
        };
        getPost();
      }
    } catch { }
  }, [provider]);

  useEffect(() => {
    if (wallet) {
      const provider = new AnchorProvider(connection, wallet, {});
      setProvider(provider);
    }
  }, [connection, wallet]);


  return (
    <article className="hentry background-color">
      <div className="featured-image">
        <img
          src="https://www.tiriniti.com/wp-content/uploads/2020/12/e499b9e87f5359e366f71bb1db4bfb04.jpg"
          alt=""
        />
      </div>
      <h1 className="entry-title">{post?.title}</h1>
      
      <div className="entry-meta">
        <p>
          <span className="author">
            BUY :  <a href="#">20$</a>
          </span>{"  "}
          <span className="date"></span>
        </p>
      </div>
      <div className="entry-content">
        <p>{post?.content}</p>
      </div>
    </article>
  );
};
