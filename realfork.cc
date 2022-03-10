#include <napi.h>
#include <iostream>
#include <sys/wait.h>
#include <unistd.h>

Napi::Boolean Fork(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    pid_t c_pid = fork();

    if (c_pid == -1) {
        perror("fork");
        exit(EXIT_FAILURE);
    } else if (c_pid > 0) {
        return Napi::Boolean::New(env, false);
    } else {
        return Napi::Boolean::New(env, true);
    }
}

Napi::Object Init(Napi::Env env, Napi::Object exports) {
  exports.Set(Napi::String::New(env, "fork"),
              Napi::Function::New(env, Fork));
  return exports;
}

NODE_API_MODULE(realfork, Init)
