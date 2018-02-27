# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|

  config.vm.define(:dev, primary: true) do |dev|
    dev.vm.hostname = "dev.local"
    dev.vm.box = "centos/7"
    dev.vm.box_version = "1801.02"
    dev.vm.synced_folder ".", "/workspace"
    dev.vm.network :private_network, ip: "192.168.55.10"
    dev.vm.network :forwarded_port, guest: 3000, host: 3000
    dev.vm.network :forwarded_port, guest: 8000, host: 8000

    dev.vm.provider(:virtualbox) do |vb|
      vb.gui = false
      vb.cpus = 2
      vb.memory = "1024"
    end
  end

  config.vm.provision "ansible_local" do |ansible|
    # see available version https://pypi.python.org/pypi/ansible
    ansible.install_mode = "pip"
    ansible.version = "2.5.0b1"
    ansible.become = true
    ansible.become_user = "root"
    ansible.compatibility_mode = "2.0"
    ansible.config_file = "./ansible/ansible.cfg"
    ansible.inventory_path = "./ansible/inventories"
    ansible.playbook = "./ansible/playbooks/setup.yml"
    #ansible.verbose = "-vvvv"
  end

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine and only allow access
  # via 127.0.0.1 to disable public access
  # config.vm.network "forwarded_port", guest: 80, host: 8080, host_ip: "127.0.0.1"

end
