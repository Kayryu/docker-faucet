FROM nvidia/opencl:latest
  
# Select version
ENV RUST_VERSION=nightly-2020-01-08-x86_64-unknown-linux-gnu

# Add user
RUN useradd --gid root --create-home --no-log-init --shell /bin/bash abm

# Install sshd
RUN apt-get update && apt-get install -y openssh-server
RUN mkdir /var/run/sshd

#RUN sed -ri 's/^#?PermitRootLogin\s+.*/PermitRootLogin yes/' /etc/ssh/sshd_config
#RUN sed -ri 's/UsePAM yes/#UsePAM yes/g' /etc/ssh/sshd_config

# Change password
RUN echo "root:123456" | chpasswd
RUN echo "abm:123456" | chpasswd

# Install Tools
RUN apt-get install -y apt-utils \
       sudo \
       ca-certificates \
       curl \
       gcc \
       libc6-dev \
       python \
       git \
       ssh \
       tar \
       gzip \
       build-essential \
       -qqy \
       --no-install-recommends

# Clean
RUN apt-get clean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

USER abm

# Install rust
RUN curl https://sh.rustup.rs -sSf | \
    sh -s -- --default-toolchain $RUST_VERSION -y

#RUN source $HOME/.cargo/env
ENV PATH $HOME/.cargo/bin:$PATH

USER root

EXPOSE 22

CMD ["/usr/sbin/sshd", "-D"]