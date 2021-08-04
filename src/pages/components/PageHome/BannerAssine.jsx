import { NavLink } from "react-router-dom";

const BannerAssine = () => (
    <div className="text-center wsi-container-dark rounded col-md-8 py-3">
        <h1> ESTE CONTEUDO É EXCLUSIVO PARA ASSINANTES</h1>
        <h3 className="text-danger"><b>ASSINE JÁ E TENHA ACESSO!</b></h3>
        <NavLink className="btn btn-lg wsi-btn-secondary my-3 py-3"
        to="novo_pagamento"
        ><b className="h2">ASSINAR AGORA</b></NavLink>
    </div>
);

export default BannerAssine;