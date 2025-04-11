import { LockOutlined, MobileOutlined, UserOutlined } from "@ant-design/icons";
import {
  LoginFormPage,
  ProConfigProvider,
  ProFormCaptcha,
  ProFormCheckbox,
  ProFormText,
} from "@ant-design/pro-components";
import { Divider, Space, Tabs, message, theme } from "antd";
import { useState } from "react";
import FormLogo from "../../components/Logos/FormLogo";
import BgVideo from "../../assets/LoginVideo.mp4";
import "./Login.css";
import UTPLogo from "../../components/Logos/UTPLogo";
import FiscLogo from "../../components/Logos/FiscLogo";
import MicrosoftLogo from "../../components/Logos/MicrosoftLogo";

type LoginType = "phone" | "account";

const Login = () => {
  const [loginType, setLoginType] = useState<LoginType>("phone");
  const { token } = theme.useToken();
  return (
    <div>
      <video
        className="fixed object-cover z-0 w-full h-full"
        autoPlay
        loop
        muted
        preload="none"
        playsInline
      >
        <source src={BgVideo} type="video/mp4" />
      </video>
      <div className="fixed z-20 top-3 left-10 flex justify-center items-center gap-6">
        <div className="w-20">
          <UTPLogo />
        </div>
        <div className="w-20 fill-green-700">
          <FiscLogo />
        </div>
        <div className="flex flex-col text-white">
          <span className="text-xl text-white">
            Universidad Tecnológica de Panamá
          </span>
          <span>Facultad de Ing. Sistemas y Computación</span>
        </div>
      </div>
      <div className="fixed top-1/2 transform translate-x-16 -translate-y-1/2 text-6xl text-white font-bold flex flex-col select-none leading-tight z-10">
        <span>Hazlo por ti.</span>
        <span>Aprende,</span>
        <span>Emprende,</span>
        <span>Y Vende</span>
      </div>
      <main className="">
        <LoginFormPage
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
          submitter={{
            searchConfig: { submitText: "Iniciar Sesión" },
          }}
          logo={
            <div className="-translate-x-13">
              <FormLogo />
            </div>
          }
          containerStyle={{
            backgroundColor: "rgba(0, 0, 0,0.65)",
            backdropFilter: "blur(4px)",
          }}
          // subTitle="Crece Emprendiendo"
          actions={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Divider
                plain
                style={{
                  borderColor: "white",
                }}
              >
                <span
                  style={{
                    color: token.colorTextLightSolid,
                    fontWeight: "normal",
                    fontSize: 14,
                  }}
                >
                  Inicia sesión con
                </span>
              </Divider>
              <Space align="center" size={24}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    height: 40,
                    width: 40,
                    border: "1px solid " + token.colorPrimaryBorder,
                    borderRadius: "50%",
                  }}
                  className="cursor-pointer"
                  onClick={() => {
                    console.log("Microsoft Clicked");
                  }}
                >
                  <div className="w-4">
                    <MicrosoftLogo />
                  </div>
                </div>
              </Space>
            </div>
          }
        >
          <Tabs
            centered
            activeKey={loginType}
            onChange={(activeKey) => setLoginType(activeKey as LoginType)}
          >
            <Tabs.TabPane
              key={"account"}
              tab={
                <span
                  className={`tab-text ${
                    loginType === "account" ? "tab-text-active" : ""
                  }`}
                >
                  Cuenta
                </span>
              }
            />
            <Tabs.TabPane
              key={"phone"}
              tab={
                <span
                  className={`tab-text ${
                    loginType === "phone" ? "tab-text-active" : ""
                  }`}
                >
                  Teléfono
                </span>
              }
            />
          </Tabs>
          {loginType === "account" && (
            <>
              <ProFormText
                name="username"
                fieldProps={{
                  size: "large",
                  prefix: (
                    <UserOutlined
                      style={{
                        color: token.colorText,
                      }}
                      className={"prefixIcon"}
                    />
                  ),
                }}
                placeholder={"Usuario: admin o usuario"}
                rules={[
                  {
                    required: true,
                    message: "Por favor, ingresa tu usuario!",
                  },
                ]}
              />
              <ProFormText.Password
                name="password"
                fieldProps={{
                  size: "large",
                  prefix: (
                    <LockOutlined
                      style={{
                        color: token.colorText,
                      }}
                      className={"prefixIcon"}
                    />
                  ),
                }}
                placeholder={"Contraseña"}
                rules={[
                  {
                    required: true,
                    message: "Ingresa tu contraseña!",
                  },
                ]}
              />
            </>
          )}
          {loginType === "phone" && (
            <>
              <ProFormText
                fieldProps={{
                  size: "large",
                  prefix: (
                    <MobileOutlined
                      style={{
                        color: token.colorText,
                      }}
                      className={"prefixIcon"}
                    />
                  ),
                }}
                name="mobile"
                placeholder={"Teléfono: 6XXX-XXXX"}
                rules={[
                  {
                    required: true,
                    message: "No olvides colocar tu teléfono！",
                  },
                  {
                    pattern: /^6\d{3}-\d{4}$/,
                    message: "Ups! Tu teléfono no es válido",
                  },
                ]}
              />
              <ProFormCaptcha
                fieldProps={{
                  size: "large",
                  prefix: (
                    <LockOutlined
                      style={{
                        color: token.colorText,
                      }}
                      className={"prefixIcon"}
                    />
                  ),
                }}
                captchaProps={{
                  size: "large",
                }}
                placeholder={"Código de verificación"}
                captchaTextRender={(timing, count) => {
                  if (timing) {
                    return `${count} ${"Obtener nuevo código"}`;
                  }
                  return "Enviar código";
                }}
                name="captcha"
                rules={[
                  {
                    required: true,
                    message: "Por favor, ingresa tu código de verificación！",
                  },
                ]}
                onGetCaptcha={async () => {
                  message.success("Código de verificación correcto!");
                }}
              />
            </>
          )}
          <div
            style={{
              marginBlockEnd: 24,
              height: 23,
            }}
          >
            <ProFormCheckbox noStyle name="autoLogin">
              <span className="text-white">Mantener sesión iniciada</span>
            </ProFormCheckbox>
            <a
              style={{
                float: "right",
              }}
            >
              Olvidé mi contraseña
            </a>
          </div>
        </LoginFormPage>
      </main>
    </div>
  );
};

export default () => {
  return (
    <ProConfigProvider>
      <Login />
    </ProConfigProvider>
  );
};
